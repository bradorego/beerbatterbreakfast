---
layout: category
title: Wheat Beers (Weissbiers)
permalink: '/categories/wheat-beer'
eleventyExcludeFromCollections: true
---

## Blog Posts

{% for post in collections['wheat beer'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
