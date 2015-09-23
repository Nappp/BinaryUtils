/*
 * A utility to manipulate bits
 * @author nap
 */
public class BinaryUtils {
    private int num;
    private int bLength;
    
    /*
     * Constructor method
     * @param x
     *  Decimal number to be manipulate
     */
    public BinaryUtils(int x) {
        this.num = x;
        this.bLength = getLength(x);
        System.out.println(bLength);
    }
    
    /*
     * Constructor method
     * @param str
     *  String of bits in binary form
     */
    public BinaryUtils(String str) {
        this(Integer.parseInt(str, 2));
    }
    public int getNum(){
        return this.num;
    }
    
    /*
     * prints the binary form of any decimal
     * @param number
     *  decimal number to be printed
     */
    public static void print(int number){
        System.out.println(Integer.toBinaryString(number));
    }
    
    /*
     * prints the binary form of the object
     */
    public void print(){
        System.out.println(Integer.toBinaryString(num));
    }
    
    /*
     * gets the binary length of number
     * @param number
     *  decimal number to be calculate
     * @return
     *  length of the the parameter
     */
    public int getLength(int num){
        int bLength = 0;
        while(num != 0){
            num>>=1;
            bLength++;
        }
        return bLength;
    }
    
    /*
     * gets the first N bits of object
     * @param length
     *  N bits to get
     * @return
     *  the first N bits
     */
    public int prefix(int length){
        return length>bLength?-1:num>>(bLength-length);
    }
    
    /*
     * gets the last N bits of object
     * @param length
     *  N bits to get
     * @return
     *  the last N bits
     */
    
    public int suffix(int length){
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
    public int mid(int start, int length){
        return (start+length>bLength)?-1:suffix(bLength-start)>>(bLength-start-length);
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
    public int replace(int start, int length, int bits){
        if(getLength(bits)>length){
            bits >>= (getLength(bits) - length);
        }
        if(mid(start, length)==bits){
            return num;
        }
        int head = prefix(start);
        int tail_length = bLength-start-length;
        int tail = suffix(tail_length);
        return num=(((head<<length)+bits)<<tail_length)+tail;
    }
}
