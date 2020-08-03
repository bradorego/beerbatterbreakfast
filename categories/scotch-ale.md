---
layout: category
title: Scotch Ales
permalink: '/categories/scotch-ale'
eleventyExcludeFromCollections: true
---

## Blog Posts

{% for post in collections['scotch ale'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
