---
layout: page
title: Categories
eleventyExcludeFromCollections: true
---

{% for post in collections.sorted-category %}

* <a href="{{ post.url }}" target="_self">{{ post.data.title }} </a>

{% endfor %}