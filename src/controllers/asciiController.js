// src/controllers/asciiController.js

// const openaiService = require('../services/openaiService');
// const { convertToAscii } = require('../services/asciiService');

exports.generateAsciiArt = async (req, res) => {
    try {
        const theme = req.body.theme; // Theme from the frontend
        console.log(`Received theme: ${theme}`); // Log the received theme
        
        // Simulate a response for testing purposes
        // const imageUrl = await openaiService.fetchImageUrl(theme); // Fetch image URL from OpenAI
        // const asciiArt = await convertToAscii(imageUrl); // Convert the image to ASCII
        // res.json({ asciiArt });
        
        // Create a mock array of characters based on the theme for testing
        //const characters = theme.split('').map((char, index) => `${char}`);

console.log(theme == "animals");

        let characters = []
if (theme == "animals") {
     characters = [
        "....................................................................................................",
        "....................................................................................................",
        "....................................................................................................",
        "....................................................................................................",
        "....................................................................................................",
        "................................:555:...............................................................",
        "...............................:OOOOO5:.............................................................",
        "..............................:OOOOOOO5;............................................................",
        "..............................5OOO5555O55...........................................................",
        ".............................:OOOO55555555..........................................................",
        ".............................5OOOO555;;555;.........................................................",
        "............................:5OOOOOO5;;5555;...................................;O5555:..............",
        "............................:OOOOO555;;55555;..............................:;55555555;..............",
        "............................OOOOO5555555O5O55;:..........................;5555;;;555O5..............",
        "...........................;OOOOOOO555OOOOOOOO5OOOOOOOOOO;:...........:555555;;;555OO:..............",
        "...........................:O55OOOOOOOOOOO$$OOOO$O$$O$$$$$$$O5;:.:;5;55555;;;;;;555O5...............",
        "...........................O5OO$$$O$OOOOOOOOOOOOOOO$OOO$$$$$$$$$$O55OO5555;;;5;;5OOO5...............",
        "...........................55OO$$$$OOOOOO5OOOOOOOO$&$$$$$$OO$OO$$OOOOO55555;;;;;55O5:...............",
        "..........................:OOO$$$OOOOOOOOOOOOOOOOO$&$$$$$$$O&OO$OOO5OOO5555;;;55555:................",
        "..........................;OO$&OO5OOOOOOOOOOOOOOO$&OOO$$$$OO&&OOOOOO55O5OOOO5555OO5:................",
        ".........................:OO$&$OOOOOOOO$OOOOOOOOO&$O$O$$O$$O&&OOOOOOO555OOO55O5555O:................",
        "........................5O$$$$$OOO$OOOOOOOOOO$$$$$OOOO$$OO55O&OOOOOOOOO55OOOOOO5;O:.................",
        "........................5OOO$$OOOOOOOOOO$$$$OO&&$OO$OO$$OOOOO&OOOOOOOOOOO55O$$O5;;..................",
        ".......................:OOOO$OOOOOOOOOOOO$&OOO&&$5O$OO$&OO$OO$$OOOOOOOO5O555OO5;;...................",
        "......................:OOO$$$OOOOOOOOO5OOOOOOO&&OOOOO$&$OO$5O&&$OOOOOOOOO555OOO;....................",
        ".....................:OOO$$$$&&&&&&$$&&$O$$OOOOOOOOOOO$OOOOOO&&O5O&&$OOOOO55OOO;....................",
        "....................:5OOOO$$&&$$$OO5O&OOOOOO$$O5OOOOOOOOOOO55$O55OOOOOOOOOO5OOOO....................",
        "....................:OOOO&&&&OOOOOO55$OOOOO5O&O55OOOOOOOOO55;55OOOOO555OOOO5OOOO:...................",
        "...................:5O$&&&&&OOOOOOOO55O$OOOO$&&55OOOOOO55;;;OO5O555O&OOOOO55OOOO....................",
        "...................:OOOOOOOOOOOO$$O$$$OOOO$$$&&O5OOOOOO55;;O555O5;;O$OO$&&OOOOO5....................",
        "..................:OO$OOOO55OOO55O$&$$$&$$O5O$$&OOOOOOO5;5$&O55OOOO$5;555$$$OOO;....................",
        "..................;O$O$$$OOOO$$$OOO$OO$$OOOOO&&OOOOOOOO5O&$O5OOOOO555OOO55O$OOO5....................",
        "................:O$OOOO$$$$$$$OOOOOOOOOOOOOO$$$$OOOOOOOOO$$OOO$$&&$$$OOO5;O$OOO;....................",
        "..............:O$OOOOOOOO$$$OOOOOOOOO55OOOOOOO$&$OOOOOOOOO$OOOO$OOO$OOO55;O$$$O:....................",
        "............;O$$$OOOOOOOOO$OOOOOOOOOO5OO$$$OO$&&$$OOOOO$OOOOO5;5OOO55;;;;;555O:.....................",
        ".........:5O$$$OOOOOOOOOOOO$OOOOO55555O5OOO$OO$$OOOOOOO$OOOO5555;5OOO$$O5;;;5;......................",
        ".......:5OOO$$$OOOOOOOOOOOOOOO$$OOO555OOO$OOO55O$$OOOOOOOOOOOO5;;;5555OOO;5;5:......................",
        ";;;;;OOO$OO$$O$O5OOOOOOOO$OOOOOOOO55555OOOO555555$$$O;;;;5O555;;5OOO55OOOOO5:.......................",
        "&$$$$$$$$$$O$OOOOOOOOOOO$$OOO5OOOOOO5;55O55555555O$5;;;;;5OOOO;;;;;;555OOO5;........................",
        "OOO$$$$$$OOO$$OOOOO$OOOOOOOO$OOO55OOO5;5555OOOOOOOO5;;;;;;555;:;:;5555O5O5;:........................",
        "OOOOOOOOO$$$O$OOOOO$OOO55O$&&OOOOOOOOOO55555555555555;5;;;;::;;;55555555;:..........................",
        "OO$$$$$OO$$OOOOOO5OOOOOOOOOO$$$O$$$OOOOOO55;5;;;;;;;:::::::;;555OOOO5;;;:...........................",
        "O$OOO$$$O$OOOOOOO55O$$OOOOOOO$$&$OOOOOOOOOO55;;;;;:::::;;555;5;;;55;;;::............................",
        "OOOOOO$$O$OOOOOOOO55OO$$OOOOOOO$O$O$$OOOOOOOOO55555555;;5;5;;;;;;;;;;:..............................",
        "$OOOOOOOO$$OOOOOO$O5OOOOOOO55OOOO$$&$OOOOOOOOOOOOOOO5555555555;;;;;;................................",
        "$$$$OOOOOOOOOOOOOOOOO5OOO&$OOOOOO$$$$$$$$OOOOOO5OO55O555555555;;;;;.................................",
        "$$$$$$$OOOOOOOOOOOOOOOO5OO$$$OOOOOOOOO$$OOOOOOOOOO555555;;5;;;;;;;:.................................",
        "OOOOOOOOOOOOOOOOOOOOOO555OO$$$OOOOOOOOOOOOOOOOO55O555555;;555;;;5;:.................................",
        "OOOOOOOOOOOOOOOOOOOOOOO5O55OO$&OOOO$OOOOOOOOOOOOO55O55555555555;5;:.................................",
        "OOOOOOOOOOOOOOOOOOOOOOOOO5OOOO&&$OOOOOOOOOOO5555OOOOO5555O5O555;;;:.................................",
        "$$$O$$OOOOOOOOOOOOOOOOOOO5O5OOO&&$OOOOOOOOOOOOO555555OO55555;;;;;;:.................................",
        "$$$OO$$$OOOOOOOOOOOOOOOOOO55OOO$&&&$O&$OOOOOOOOO555555555;;;;;;;;;..................................",
        "OOOOOOOO$OOOOOOOOOOOOOOOOOOOO5OOOO$&&&&&$$OOO5OOOOO55;;;;5;;;;55;:..................................",
        "OOOOOOOOO$$OOOOOOOOOOOOOOOOOOOOOOOOOOO$$OOOOO5OOOO55;5555555555;;...................................",
    ];
} else {

     characters = [
        "....................................................................................................",
        "....................................................................................................",
        "....................................................................................................",
        "....................................................................................................",
        "....................................................................................................",
        "................................:+++:...............................................................",
        "...............................:xxxxx+:.............................................................",
        "..............................:xxxxxxx+;............................................................",
        "..............................+xxx++++x++...........................................................",
        ".............................:xxxx++++++++..........................................................",
        ".............................+xxxx+++;;+++;.........................................................",
        "............................:+xxxxxx+;;++++;...................................;x++++:..............",
        "............................:xxxxx+++;;+++++;..............................:;++++++++;..............",
        "............................XxXxx+++++++x+x++;:..........................;++++;;;+++x+..............",
        "...........................;Xxxxxxx+++xxxxxXXx+XXXXxXXXXx;:...........:++++++;;;+++xx:..............",
        "...........................:X++xXXxxxXxxXX$$XXXx$X$$X$$$$$$$X+;:.:;+;+++++;;;;;;+++x+...............",
        "...........................x+xX$$$X$XXXXXXXXXXXXXXx$xxX$$$$$$$$$$X++xx++++;;;+;;+xxx+...............",
        "...........................++xX$$$$XXXxxx+xxxXXXxx$&$$$$$$XX$Xx$$xxXXx+++++;;;;;++x+:...............",
        "..........................:xxX$$$XxxxxxxXXXXXXXXxX$&$$$$$$$X&XX$XXx+xxx++++;;;+++++:................",
        "..........................;XX$&Xx+xXxxxXXXXXxXXXX$&XXX$$$$XX&&xxXxxx++x+xxxx++++xx+:................",
        ".........................:xX$&$xXXXxXXX$XXXXXXXXX&$x$X$$X$$x&&XxXXxxx+++xxx++x++++x:................",
        "........................+X$$$$$XxX$XXXXxXXXXX$$$$$XXxX$$XX++X&XxxXXxXxx++xxXXxx+;x:.................",
        "........................+XXX$$XXXXXxXXXX$$$$xX&&$xX$xX$$XxxXX&XXXxxXXxxxx++X$$x+;;..................",
        ".......................:xXXX$XXxXXxXxXXXX$&XxX&&$+X$xX$&Xx$Xx$$XXXXxxXx+x+++xX+;;...................",
        "......................:xXX$$$XXXXXXXXx+xxxxXxX&&xxXXX$&$Xx$+x&&$xxXXXxxxx+++xXx;....................",
        ".....................:xXX$$$$&&&&&&$$&&$X$$xxxXXxXXxXX$XXXXxx&&x+x&&$Xxxxx++xXx;....................",
        "....................:+XXXX$$&&$$$XX+x&xxxXXx$$x+xXXXxXXXxXx++$x++xxxxxxxxxx+XXXx....................",
        "....................:xXXX&&&&XXXXxx++$XxxXx+x&X++XXxXxxxxx++;++xxxxx+++xXxx+xxXX:...................",
        "...................:+X$&&&&&XxxXXXXX++x$Xxxx$&&++xXXxxx++;;;xx+x+++X&XXXXx++xXxx....................",
        "...................:xXXXXXXXXxxx$$X$$$XxxX$$$&&X+xxxxxx++;;X+++x+;;x$xX$&&Xxxxx+....................",
        "..................:xX$XXxx++xxx++X$&$$$&$$x+x$$&xxxxxxx+;+$&X++xxxX$+;+++$$$XXx;....................",
        "..................;X$X$$$XxxX$$$XXX$XX$$XXXXX&&XXXxxXxx+x&$x+xXXXx+++xxx++x$XXx+....................",
        "................:x$XXXX$$$$$$$XXXXXXXXxxxxxX$$$$XXXXxxxxx$$xxX$$&&$$$XXx+;x$Xxx;....................",
        "..............:x$XXXXXXxX$$$XXXXXxxxx++xxXXXXX$&$XXXXXXXXX$xxxX$XXX$XXX++;x$$$x:....................",
        "............;X$$$XXXXXXXXX$XXXxxxxxxx+xX$$$XX$&&$$XXXXX$Xxxxx+;+xXx++;;;;;+++x:.....................",
        ".........:+X$$$XxXXXXXxXxxX$XXXxx+++++x+xXX$XX$$XXXXXXX$Xxxx++++;+XxX$$x+;;;+;......................",
        ".......:+XXX$$$xxXXXXXXXxxXxXX$$Xxx+++xXX$XXx++x$$xxXXxXxxxXXx+;;;++++xXx;+;+:......................",
        ";;;;;xXX$XX$$X$x+xXXXXXXX$XXxxXXxx+++++XXXx++++++$$$X;;;;+x+++;;+xxx++xxXXx+:.......................",
        "&$$$$$$$$$$X$XXxxxXxxxxX$$XXx+xxXXXx+;++x++++++++x$+;;;;;+xxxx;;;;;;+++xxx+;........................",
        "xxX$$$$$$XXX$$XXxxX$xxxXXXXX$XXX++xxX+;++++xxxxxxXX+;;;;;;+++;:;:;++++x+x+;:........................",
        "xXXXXXXXX$$$X$XXxxX$Xxx++X$&&XxXXXXXxxx++++++++++++++;+;;;;::;;;++++++++;:..........................",
        "xx$$$$$XX$$XXXXXx+xXXxxxxxXX$$$X$$$Xxxxxx++;+;;;;;;;:::::::;;+++xxxx+;;;:...........................",
        "X$XXX$$$X$XXXXXxx++x$$XxxxxxX$$&$XxXXXXXxxx++;;;;;:::::;;+++;+;;;++;;;::............................",
        "XXXXXX$$X$XXXXXXXx++xX$$xxxXxxX$X$X$$XXXXXxxxx++++++++;;+;+;;;;;;;;;;:..............................",
        "$XXXXXXXX$$XXXXXX$x+xxXXXXx++xxxX$$&$XXXXxxxxxxxxxxx++++++++++;;;;;;................................",
        "$$$$XXXXxXXXXXXxxXxxx+xxX&$XxxXxX$$$$$$$$XxxXxx+xx++x+++++++++;;;;;.................................",
        "$$$$$$$XxxXXXXXXxxXXxxx+xX$$$xxxxxxXXX$$XXXxxxxxxx++++++;;+;;;;;;;:.................................",
        "XXXXXXXXxXXxxxxxxXXXXx+++xX$$$XXxXXXXXXXXXXXxxx++x++++++;;+++;;;+;:.................................",
        "XxxxxxxXXXxXXXxxxxxXXXx+x++xX$&XXXX$XXXXXxXxxxxxx++x+++++++++++;+;:.................................",
        "XXxXXxxxXXxxxxXXxxxxxxxxx+xxxX&&$XxXXXxxXXxx++++xXxxx++++x+x+++;;;:.................................",
        "$$$X$$XxxxxxxxXXXxxxxxXXx+x+xxX&&$XXXxxxxxxXxxx++++++xx+++++;;;;;;:.................................",
        "$$$XX$$$XXxxxxXXXXXxXXxXXx++xxX$&&&$X&$XxXxXXXxx+++++++++;;;;;;;;;..................................",
        "XXXXXXXX$XXXxxxXXXXxxXXXXXxxx+xxxX$&&&&&$$Xxx+xXXxx++;;;;+;;;;++;:..................................",
        "XXXxxxXXX$$XXxxxXXXXXXxXXxXxxxxxxxxXxX$$XXxxx+xxxx++;++++++++++;;...................................",
    ];
}


console.log(characters);


        
        // Send the mock array back in the response
        res.json({ characters });
    } catch (error) {
        console.error('Error in ASCII art generation process:', error);
        res.status(500).send('Error in ASCII art generation process');
    }
};
