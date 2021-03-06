var request = require ('request');
var cheerio = require ('cheerio');
var fsPromises = require('fs');

request('http://www.imdb.com/chart/moviemeter',function(err,res,body){
    if(err) console.log('Erro: ' + err);

    var $ = cheerio.load(body);

    $('.lister-list tr').each(function(){
        var title = $(this).find('.titleColumn a').text().trim()
        var rating = $(this).find('.imdbRating strong').text().trim()

       const data =  console.log('Titulo: ' + title +  " " + "Nota: " + rating);
 
        fsPromises.appendFile('imdb.txt' ,'Titulo: '+ title  + ', nota: ' + rating + '\n', function(err) {
                if(err) console.log('error', err);
        });
    });
})
