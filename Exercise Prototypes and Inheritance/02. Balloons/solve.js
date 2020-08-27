function solve() {
    class Balloon{
        constructor(color, gasWight){
            this.color = color;
            this.gasWeight = gasWight;
        }
    }
    class PartyBalloon extends Balloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength){
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this.ribbon = {
                color:ribbonColor,
                length:ribbonLength
            }
        }
    }
    class BirthdayBalloon extends PartyBalloon{
        constructor( color, gasWeight, ribbonColor, ribbonLength, text) {
            super( color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;   
        }
    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}
