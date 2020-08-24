function solve(){
    let result = {
        fighter: function(name){
            return {
                name: name,
                health: 100,
                stamina: 100,
                fight: function(){
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }
        },
        mage: function(name){
            return {
                name: name,
                health: 100,
                mana: 100,
                cast: function(spell){
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            }
        }
    } 
    return result
}
