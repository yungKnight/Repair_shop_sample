console.log("hello world")
var name;
name = 'Ajayi Eniola';
console.log(name)

likes = 5, Y = 100, views = 500;
/*
where likes is the number of likes a post has
Y is the official twitter metric for views to like(100 : 1)
views is total times tweet have been seen
*/


//  const sociality = ((likes * Y) / views)
//  if (sociality > 0.85 && === 1) {
// 	console.log("Quite the norm fella");
// } else if (sociality < 0.85) {
// 	console.log('might be facts but the public disagrees')
// } else {
// 	console.log ('The public seem fascinated by this piece of info.')
// }

function social(likes, Y, views) {
 return (likes * Y)/views;
}
console.log(social(5, 100, 500));