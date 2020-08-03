---
layout: category
title: Oktoberfests (Marzen)
permalink: '/categories/oktoberfest'
---

## Blog Posts

{% for post in collections['oktoberfest'] %}
  * <a href="{{post.url}}"  target="_self">{{ post.title }}</a>
{% endfor %}
