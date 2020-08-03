---
layout: category
title: Scotch Ales
tags: ["category"]
---

## Blog Posts

{% for post in collections['scotch ale'] %}
  * {% include "simple-list-item-link.html", post:post %}
{% endfor %}