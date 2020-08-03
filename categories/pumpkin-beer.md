---
layout: category
title: Pumpkin Beers
permalink: '/categories/pumpkin-beer'
eleventyExcludeFromCollections: true
---

## Blog Posts

{% for post in collections['pumpkin beer'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
