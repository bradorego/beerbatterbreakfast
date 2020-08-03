---
layout: category
title: Fruit Beers
permalink: '/categories/fruit-beer'
---

## Blog Posts

{% for post in collections['fruit beer'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
