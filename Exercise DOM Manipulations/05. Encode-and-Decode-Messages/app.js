    function encodeAndDecodeMessages() {
        const divs = document.querySelectorAll('#main > div');

        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', encodeDecodeHandler);     
        }

        function encodeDecodeHandler(e){
            let encodeTextArea = Array.from(document.getElementsByTagName('textarea'))
                .filter(a => a.placeholder  === 'Write your message here...');
            let decodetextArea = Array.from(document.getElementsByTagName('textarea'))
            .filter(a => a.placeholder  === 'No messages...');
            if (e.target.innerText === 'Encode and send it') {
                if (encodeTextArea[0].value) {
                    let encoded = encode(encodeTextArea[0].value);
                    encodeTextArea[0].value = null;
                    decodetextArea[0].innerText = encoded;
                }              
            }else if(e.target.innerText === 'Decode and read it'){
                if (decodetextArea[0].value) {
                    let decoded = decode(decodetextArea[0].value)
                    decodetextArea[0].innerText = decoded;
                }   
            }
        }
        function encode(str){
            let result = '';
            for (let i = 0; i < str.length; i++) {
                result += String.fromCharCode(str.charCodeAt(i) + 1);        
            }
            return result;
        }
        function decode(str){
            let result = '';
            for (let i = 0; i < str.length; i++) {
                result += String.fromCharCode(str.charCodeAt(i) - 1);        
            }
            return result;
        }
    
}   