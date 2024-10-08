![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Svendolin/Bachelor-Project-SKA2025?style=for-the-badge) ![GitHub contributors](https://img.shields.io/github/contributors/svendolin/Bachelor-Project-SKA2025?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/Svendolin/Bachelor-Project-SKA2025?color=pink&style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/Svendolin/Bachelor-Project-SKA2025?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Svendolin/Bachelor-Project-SKA2025?color=yellow&style=for-the-badge)


***

# ✔- Full Stack Search Engine - ✔

_**In this webproject as part of the SAE Bachelor program 6GST0XD10x I'm building a full stack search engine with next.js using postgres full-text search and semantic quaring Upstash Vector to be able to use it on a separate subpage depending on the initial situation for my website: www.toycarsaddict.club. You can also find access to the project on my developer page: www.svendolin-productions.ch - I also tried to implement another interesting way of searching: the so called reverse image search.**_
        
| TYPE | LINK | 
|:--------------| :--------------|
| Website where the project is going to be implemented:| [www.toycarsaddict.club ](https://toycarsaddict.club/)|
| Websites where all my projects are staged including this one: | [www.svendolin-productions.club ](https://svendolin-productions.ch/)|


<br />
<br />

***
## Q&A - Questions and Answers about this project [IMPORTANT] ✅
***

 **A) Why building an own search engine?**
* I find the topic extremely interesting and profound. It is a very complex topic that involves many different aspects. Many background processes are not even noticed by users or are not made transparent by the operators of search engines such as Google. Through a project like this, I can get a better picture of how a search engine works, which processes are necessary and how I can build a search engine that is as user-friendly as possible. 
* Fortunately, there are a number of research options on the subject, in addition to videos, such as a collection of digital content that I have compiled here:
[PERLEGO.COM](https://perlego.com/join-workspace?groupId=4dc18161-9e0a-4e9d-b920-2312bc914dc1) (Btw you need a Perlego account to access the content)

 **B) What does the project have to do with model cars?**
* I have been running a very successful business revolving around 1/64th scale model cars for several years. I have built up a very large community, run several social media channels, a webshop and my own website/blog namely [www.toycarsaddict.club](https://toycarsaddict.club/) . The highlight is a subpage where the collection of me and a friend has been completely digitized. You can click on individual car brands or navigate using the A-Z buttons. You can check out this subpage [HERE](https://toycarsaddict.club/car-collection-overview/) . This is where I wanted to start with my project.
 
 **C) Why not simply install a Wordpress plugin?**
* Yes, there are some plugins that are ideal for Wordpress and Elementor (as my website was built with Wordpress). Examples are SearchWP, Relevanssi, Elasticsearch, Jetpack or Ajax Search Pro. However, in addition to many advantages, I also see many construction sites and disadvantages. 
* The most obvious point is the fact that I want to find out for myself how a search engine works and how I can optimize it.
* Another point is that I don't just want to have a general search engine but rather a version which is totally focussed on the search for model cars.
* Certain plugins such as Relevanssi take up three times as much storage space when used. This is not ideal for a hoster with limited storage space.
* Only a few plugins are free. Although the basic functions are available, they quickly become expensive. Special features or updates are subject to a charge.
So I decided to build my own full stack search engine on a separate subpage.



 **D) Why on a separate subpage and not directly on the main page of the car collection?**
* First and foremost, I want to test and try out the functionality and possibilities of my own search engine. I want to see how I can optimize the search engine so that it is as user-friendly as possible and leads users quickly and easily to the model cars they are looking for. Experimenting also breaks a lot of things! 
* It is therefore important to me that I can experiment on a subpage without having to worry about the main page being affected, as there are a lot of users on the main page every day and I have to ensure that everything runs smoothly.

 **E) What is clearly a MUST HAVE for my search engine?**
* **Basic Search** - The search engine is designed to enable users to quickly and easily search for model cars that interest them: The most basic thing is to be able to enter a search term in a text field and then receive a list of model cars that contain this search term.
* **Algorithm customization** – choose what content goes into your index and adjust the weighting according to your needs.
* **Fuzzy matching** – this eliminates situations where your site search returns no results.
* **Autosuggest** – suggest content as soon as users start typing (just like Google does it).
* **Instant Search** - Smooth loading of search results without reloading the page.
  
 **F) What is clearly a NICE TO HAVE for my search engine?**
 * **Reverse Image Search** - The search engine should have a reverse image search function as a nice to have, so that users can upload a picture and the search engine will show them similar model cars.
 * **Filtered and faceted search** – visitors can filter search results by tags, categories, custom taxonomies, post types, dates, and more.
 * **Highlighted search terms** – The search will add highlights to search terms.
 * **Spelling correction** – if visitors make a typo, the search engine can automatically detect/correct that and will still serve up relevant results.
 * **Live search instead of Instant search** - The search results are displayed live as you type.
  

**G) Why the separation of nice to have and must have?**
* The scope of work must be clearly scoped. I only have a limited amount of time for this project and have to concentrate on the essentials. You can spend hours and days on a single search feature. That's why I want to include the most important basic functions (MUST HAVE), but these should also work explicitly. The NICE TO HAVE functions are then the features that I can add bit by bit as time permits.
  
**H) To what extent does the general public benefit from this?**
* Over the years, the website has been continuously adapted and the scope of the virtual car collection expanded. User testing and feedback from users has shown that we would like to have a faster alternative to the search.
* This is because searching by clicking on the car brands and letters A-Z requires several steps before the desired car is displayed. A search function makes browsing easier, especially if you are looking for models without a specific goal and just want to browse
* The same applies to the reverse image search function. This function is particularly interesting for users who own a model car / a real vehicle but do not know which model it is. By uploading an image, the search engine can display similar models and thus facilitate the search.
* Creating a search engine in this format, especially for the model car sector, is unique and can help other fellow collectors to find information more quickly and easily.
* Such a search system can optimally serve as an important source of information as it covers many different car brands from numerous manufacturers.
* With an additional contact function, users can send me an e-mail and, for example, provide information on how much such a model costs and whether it is still available for purchase. This gives me the opportunity to draw attention to my model car store and the possibility of ordering model cars.


<br />
<br />

***
## How do Search Engines work? ✅
***

<img align="center" alt="Canvas Picture" src="https://miro.medium.com/v2/resize:fit:1400/1*3rmyyRBGTF_f2WJ6HtGRfw.png" /> <br>

1. A good search engine wants to crawl the web pages deeply (as well as high frequently) and analize it page by page
2. It should index those pages and store them in a huge database
3. It should differentiate between main index and supplemental index
    - Main index: Here are the pages that are visited most frequently (e.g. homepage = daily crawl)
    - Supplemental index: Here are the pages that are visited less frequently (e.g. imprint = monthly crawl)
4. It should rank those pages according to the search query
5. Google for example uses a PageRank algorithm to rank the pages: 
    - The PageRank algorithm is based on the number of links that point to a page
    - The more links point to a page, the more important it is
    - The more important a page is, the higher it is ranked

<br />
<br />


***
## Technologies and Installation ✅
***

1. AOS Animation On Scroll Library
    - Github https://michalsnik.github.io/aos/
2. Favicon generator 
    - Website https://realfavicongenerator.net/
3. Icons from Fontawesome
    - Website https://fontawesome.com/
4. Submitter to Google Sheet
    - Github https://github.com/jamiewilson/form-to-google-sheets

<br />
<br />

***
## Extensions ✅
***

| must | Name | Creator |  |
|:--:|:--------------|:-------------:|--------------:|
| ✔️ | Prettier - Code formatter | Prettier | [link](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) |



<br />
<br />

***
## Useful Assistance ✅
***
``123`` = 123

_**More infos:**_



```js
/* ---- BASIC EXAMPLE ---- */


```


<br />
<br />




***
<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/d92924b1d925bb134e308bd29c9de6c302ed3beb/topics/terminal/terminal.png" />

## &nbsp;DESIGN ELEMENTS I USED HERE ✅
***

| ELEMENT | USE CASE | 
|:--------------| :--------------|
| NAV | Fully responsive Navigation |
| BTTB | Back to the top button |
|LMB| Load more button (TODO)|



<br />
<br />


***
## Collaboration ✅
***
> Feel free to contact me if you've seen something wrong, found some errors or struggled on some mistakes! Always happy to have a clean sheet here! :)


<br />
<br />

***
## FAQs ✅
***
0 Questions have been asked, 0 answers have been given, 0 changes have been made.

| Questions | Anwers | Changes |
|:--------------|:-------------:|--------------:|
| 0 | 0 | 0 |
