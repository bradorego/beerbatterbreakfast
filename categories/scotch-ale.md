---
layout: category
title: Scotch Ales
permalink: '/categories/scotch-ale'
---

## Blog Posts

{% for post in site.categories['scotch ale'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
