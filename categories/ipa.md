---
layout: category
title: IPAs (Pale Ales, APAs)
tags: ["category"]
---

## Blog Posts

{% for post in collections['ipa'] %}
  * {% include "simple-list-item-link.html", post:post %}
{% endfor %}