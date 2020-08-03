---
layout: category
title: Pumpkin Beers
permalink: '/categories/pumpkin-beer'
---

## Blog Posts

{% for post in collections['pumpkin beer'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
