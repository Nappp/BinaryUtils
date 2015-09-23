(function(root, factory){
    if(typeof define === 'function' && define.amd){
        define([], factory);
    } else {
        root.BinaryUtils = factory(root);
    }
}(this, function(root){
    
    /*
     * Constructor method
     * @param x
     *  Decimal number to be manipulate
     */
    var BinaryUtils = function(x){
        this.num = (typeof x === 'number')?x:parseInt(x, 2);
        this.bLength = this.getLength(this.num);
        return this;
    }
    
    /*
     * prints the binary form of the object
     */
    BinaryUtils.prototype.print = function(){
        console.log( this.num.toString(2) );
    }
    
    /*
     * gets the binary length of number
     * @param number
     *  decimal number to be calculate
     * @return
     *  length of the the parameter
     */
    BinaryUtils.prototype.getLength = function(x){
        var l = 0;
        while(x){
            l++; x>>=1;
        }
        return l;
    }
    
    /*
     * gets the first N bits of object
     * @param length
     *  N bits to get
     * @return
     *  the first N bits
     */
    BinaryUtils.prototype.prefix = function(length){
        var num = this.num, bLength = this.bLength;
        return length>bLength?-1:num>>(bLength-length);
    }
    
    /*
     * gets the last N bits of object
     * @param length
     *  N bits to get
     * @return
     *  the last N bits
     */
    BinaryUtils.prototype.suffix = function(length){
        var num = this.num, bLength = this.bLength;
        return length>bLength?-1:num&((1<<length) - 1);
    }

    /*
     * gets the middle N bits starting from Start
     * @param start
     *  Starting position
     * @param N
     *  N bits to get
     * @return
     *  the middle N bits
     */
    BinaryUtils.prototype.mid = function(start, length){
        var num = this.num, bLength = this.bLength;
        return (start+length>bLength)?-1:this.suffix(bLength-start)>>(bLength-start-length);
    }
    
    /*
     * replace N bits starting form Start 
     * @param start
     *  Starting position
     * @param length
     *  N bits to be replaced
     * @param bits
     *  bits to replace in, it will be cropped into length specified
     * @return
     *  replacement result
     */
    BinaryUtils.prototype.replace = function(start, length, bits){
        var num = this.num, bLength = this.bLength;
        if(this.getLength(bits)>length){
            bits >>= (this.getLength(bits) - length);
        }
        if(this.mid(start, length)==bits){
            return num;
        }
        var head = this.prefix(start);
        var tail_length = bLength-start-length;
        var tail = this.suffix(tail_length);
        return num=(((head<<length)+bits)<<tail_length)+tail;
    }

    return BinaryUtils;
}));
