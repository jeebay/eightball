var net = require('net');
var chalk = require('chalk');
var port = 3000;
var eightBall ="              _.a$$$$$a._\n            ,$$$$$$$$$$$$$.\n          ,$$$$$$$$$$$$$$$$$.\n         d$$$$$$$$$$$$$$$$$$$b\n        d$$$$$$$$~'``~$$$$$$$$b\n       ($$$$$$$p   _   q$$$$$$$)\n       $$$$$$$$   (_)   $$$$$$$$\n       $$$$$$$$   (_)   $$$$$$$$\n       ($$$$$$$b       d$$$$$$$)\n        q$$$$$$$$a._.a$$$$$$$$p\n         q$$$$$$$$$$$$$$$$$$$p\n          `$$$$$$$$$$$$$$$$$'\n            `$$$$$$$$$$$$$'\n              `~$$$$$$$~'\n";
var responses =['It is certain',
'It is decidedly so',
'Without a doubt',
'Yes definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Yes',
'Signs point to yes',
'Reply hazy try again',
'Ask again later',
'Better not tell you now',
'Cannot predict now',
'Concentrate and ask again',
'Don\'t count on it',
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful'];

var server = net.createServer(function(c){
    console.log('Get to the chopper!');
    c.write(eightBall);
    c.write('Please, submit your query in the form of a question......\n> ');

    c.on('data',function(data){
        console.log('Query submitted');
        var input = data.toString().trim();
        var isQuestion = /[0-9a-zA-z\_\-\'\"]+\?/.test(input);
        if (isQuestion) {
            c.write('\n')
            setTimeout(function(){
                c.write('.');
                setTimeout(function(){
                    c.write('.');
                    setTimeout(function(){
                        c.write('.');
                        setTimeout(function(){
                            var response = responses[Math.floor(Math.random()*20)]
                            c.write(chalk.red(response));
                            c.write('\nAsk something else, if you like\n> ');
                        },650);
                    },550);
                },450);
            },350);
        } else {
            c.write('\nPlease phrase your query in the form of a question\n');
        }
    });

    c.on('end',function(){
        console.log('client disconnected');
    });
        
});

server.listen(port,function(){
    console.log('listening on ' + port);
});

