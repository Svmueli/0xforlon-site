---
title: "Footprinting a Web Edition Box: AXFR, vHosts & a 400-Page Crawl"
date: "2026-07-17"
source: "HTB Academy — Footprinting & Information Gathering (Web Edition)"
tags: "Web · Recon"
badge: "RECON"
badgeClass: "badge-medium"
---

## Overview

This module works through footprinting a web-facing target end to end: DNS misconfigurations, hidden virtual hosts, and a large, iteratively-discovered link chain. No single step was hard on its own — the challenge was patience and keeping enumeration organized as the target surface grew.

## Recon: DNS

Started with a standard DNS sweep against the target's nameserver, then tested for a misconfigured zone transfer (AXFR). A vulnerable nameserver will hand over its full zone file to anyone who asks — no auth required.

```
$ dig axfr @ns1.target.htb target.htb
```

The transfer succeeded, dumping every A/CNAME record for the domain — including a handful of subdomains that weren't linked from anywhere on the public site. That's the whole point of checking for it: it turns a guessing game into a directory listing.

![AXFR output revealing hidden subdomains](/writeups/sample-htb-box/axfr-output.png "AXFR zone transfer output — two undocumented subdomains show up in the response")

## Recon: Virtual Hosts

The subdomains from the zone transfer didn't resolve on their own, so the next step was vHost enumeration against the target IP directly, brute-forcing the `Host` header with ffuf.

```
$ ffuf -w subdomains.txt -u http://target.htb -H "Host: FUZZ.target.htb" -fs 1234
```

Filtering out the default response size (`-fs`) surfaced the vhosts actually serving distinct content — one of which was an internal-looking staging site not meant to be public.

## Exploitation: The 400-Page Crawl

The staging vhost turned out to be a chain of linked HTML pages — over 400 of them — each one holding a small clue or credential fragment needed to reach the next. There was no shortcut here: it required scripting a crawler to follow the chain, log progress, and flag anything that looked like a flag component, since manual clicking through hundreds of pages wasn't realistic.

## Lessons

The technique stack here (AXFR, vHost fuzzing, scripted crawling) is basic by design — the module is really testing whether you keep organized notes and don't lose the thread across a wide, slow-growing attack surface. That discipline matters more on a real engagement than any single clever trick.
