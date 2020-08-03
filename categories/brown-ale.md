---
layout: category
title: Brown Ales
tags: ["category"]
---

## Blog Posts

{% for post in collections['brown ale'] %}
  * {% include "simple-list-item-link.html", post:post %}
{% endfor %}