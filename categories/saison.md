---
layout: category
title: Saisons (Farmhouse Ales)
permalink: '/categories/saison'
eleventyExcludeFromCollections: true
---

## Blog Posts

{% for post in collections['saison'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
