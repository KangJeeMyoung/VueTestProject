export default {
    parse: function(data = null , ...rest){
        let ix, ixLen;
        let startTag, endTag;
        let startIndex, endIndex;
        let keyList;

        let obj = {
            template: '',
            style: '',
            script: ''
        };

        if(!data){        
            return data;
        }

        keyList = Object.keys(obj);
        
        for(ix = 0, ixLen = keyList.length; ix < ixLen; ix++){
            startTag = `<${keyList[ix]}>`;
            endTag = `</${keyList[ix]}>`;        
            keyList[ix] === 'style' ? startIndex = data.lastIndexOf(startTag) : startIndex = data.indexOf(startTag);
            endIndex = data.lastIndexOf(endTag);
            obj[keyList[ix]] = data.substring(startIndex + startTag.length, endIndex);
        }
        
        return obj;       
    }
}