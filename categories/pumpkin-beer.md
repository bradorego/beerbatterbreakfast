---
layout: category
title: Pumpkin Beers
tags: ["category"]
---

## Blog Posts

{% for post in collections['pumpkin beer'] %}
  * {% include "simple-list-item-link.html", post:post %}
{% endfor %}