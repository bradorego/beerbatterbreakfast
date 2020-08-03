---
layout: category
title: Fruit Beers
tags: ["category"]
---

## Blog Posts

{% for post in collections['fruit beer'] %}
  * {% include "simple-list-item-link.html", post:post %}
{% endfor %}