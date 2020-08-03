---
layout: category
title: Oktoberfests (Marzen)
tags: ["category"]
---

## Blog Posts

{% for post in collections['oktoberfest'] %}
  * {% include "simple-list-item-link.html", post:post %}
{% endfor %}