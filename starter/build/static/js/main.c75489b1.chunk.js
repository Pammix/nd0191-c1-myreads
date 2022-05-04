(this["webpackJsonpnd0191-myreads-starter"]=this["webpackJsonpnd0191-myreads-starter"]||[]).push([[0],{11:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),s=n(12),a=n.n(s),r=n(7),i=(n(17),n(5)),l=n(8),d=n(4),u=n(6),j=n.n(u),b=(n(11),n(1)),h=function(e){var t,n,o=e.book,c=e.updateShelfBook;return Object(b.jsxs)("div",{className:"book",children:[Object(b.jsxs)("div",{className:"book-top",children:[Object(b.jsx)("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(null===o||void 0===o||null===(t=o.imageLinks)||void 0===t?void 0:t.smallThumbnail,")")}}),Object(b.jsx)("div",{className:"book-shelf-changer",children:Object(b.jsxs)("select",{value:o.shelf?o.shelf:"none",onChange:c,children:[Object(b.jsx)("option",{value:"move",disabled:!0,children:"Move to..."}),Object(b.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(b.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(b.jsx)("option",{value:"read",children:"Read"}),Object(b.jsx)("option",{value:"none",children:"None"})]})})]}),Object(b.jsx)("div",{className:"book-title",children:null===o||void 0===o?void 0:o.title}),null===o||void 0===o||null===(n=o.authors)||void 0===n?void 0:n.map((function(e){return Object(b.jsx)("div",{className:"book-authors",children:e},e)}))]})},f=function(e){var t=e.books,n=e.onUpdateBook,o=e.onSearch,c=function(e,t){n(e,t)};return Object(b.jsx)("div",{className:"list-books-content",children:Object(b.jsxs)("div",{className:"bookshelf",children:[!o&&Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"bookshelf-title",children:"Currently Reading "}),Object(b.jsx)("div",{className:"bookshelf-books",children:Object(b.jsx)("ol",{className:"books-grid",children:t.filter((function(e){return"currentlyReading"===e.shelf})).map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(h,{book:e,updateShelfBook:function(t){return c(e,t)}},e.id)},e.id)}))})}),Object(b.jsx)("h2",{className:"bookshelf-title",children:" Want To Read"}),Object(b.jsx)("div",{className:"bookshelf-books",children:Object(b.jsx)("ol",{className:"books-grid",children:t.filter((function(e){return"wantToRead"===e.shelf})).map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(h,{book:e,updateShelfBook:function(t){return c(e,t)}},e.id)},e.id)}))})}),Object(b.jsx)("h2",{className:"bookshelf-title",children:" Read"}),Object(b.jsx)("div",{className:"bookshelf-books",children:Object(b.jsx)("ol",{className:"books-grid",children:t.filter((function(e){return"read"===e.shelf})).map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(h,{book:e,updateShelfBook:function(t){return c(e,t)}},e.id)},e.id)}))})}),Object(b.jsx)("div",{className:"open-search",children:Object(b.jsx)(r.b,{to:"/search",className:"add-contact",children:"Add Book"})})]}),o&&Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"bookshelf-books",children:Object(b.jsx)("ol",{className:"books-grid",children:null===t||void 0===t?void 0:t.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(h,{book:e,updateShelfBook:function(t){return c(e,t)}},e.id)},e.id)}))})})})]})})},O="https://reactnd-books-api.udacity.com",p=localStorage.token;p||(p=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json",Authorization:p},x=function(e,t){return fetch("".concat(O,"/books/").concat(e.id),{method:"PUT",headers:Object(i.a)(Object(i.a)({},v),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},k=function(e,t){return fetch("".concat(O,"/search"),{method:"POST",headers:Object(i.a)(Object(i.a)({},v),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then((function(e){return e.json()})).then((function(e){return e.books}))},m=function(e){var t=e.books,n=e.onUpdateBook,c=Object(o.useState)(""),s=Object(d.a)(c,2),a=s[0],i=s[1],u=Object(o.useState)([]),h=Object(d.a)(u,2),O=h[0],p=h[1];return Object(b.jsxs)("div",{className:"search-books",children:[Object(b.jsxs)("div",{className:"search-books-bar",children:[Object(b.jsx)(r.b,{to:"/",className:"close-search",children:"Close"}),Object(b.jsx)("div",{className:"search-books-input-wrapper",children:Object(b.jsx)("input",{type:"text",placeholder:"Search by title, author, or ISBN",value:a,onChange:function(e){return function(e){if(i(e),e){var n=function(){var n=Object(l.a)(j.a.mark((function n(){var o,c,s;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k(e,100);case 2:o=n.sent,c=void 0===o?[]:o,Array.isArray(c)?(s=new Map,t.map((function(e){return s.set(e.title,e.shelf)})),c.map((function(e){return e.shelf=void 0!==s.get(e.title)?s.get(e.title):"none"})),p(c)):p([]);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}else p([])}(e.target.value)}})})]}),console.log(O),Object(b.jsx)(f,{books:O,onSearch:!0,onUpdateBook:n})]})},g=n(2);var N=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(o.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/books"),{headers:v}).then((function(e){return e.json()})).then((function(e){return e.books}));case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var s=function(){var e=Object(l.a)(j.a.mark((function e(t,o){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(t,o.target.value),console.log(n),console.log(t.shelf),n.filter((function(e){return e.id===t.id})).length>0?c(n.map((function(e){return e.title===t.title?Object(i.a)(Object(i.a)({},e),{},{shelf:o.target.value}):e}))):(console.log(t),c(n.concat(Object(i.a)(Object(i.a)({},t),{},{shelf:o.target.value}))));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"list-books-title",children:Object(b.jsx)("h1",{children:"MyReads"})}),Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{exact:!0,path:"/",element:Object(b.jsx)(f,{books:n,onUpdateBook:s,onSearch:!1})}),Object(b.jsx)(g.a,{exact:!0,path:"/search",element:Object(b.jsx)(m,{books:n,onUpdateBook:s})})]})]})};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(N,{})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c75489b1.chunk.js.map