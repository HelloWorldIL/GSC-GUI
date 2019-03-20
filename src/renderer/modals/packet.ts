class PacketType {
    name: String;
    id: Number;
    unit: String;
    rangeMin: Number;
    rangeMax: Number;
    constructor(name: String, id: Number, unit: String, rangeMin: Number, rangeMax: Number) {
        this.name = name;
        this.id = id;
        this.unit = unit;
        this.rangeMin = rangeMin;
        this.rangeMax = rangeMax;
    }
}

class Packet {
    id: Number;
    value: Number;
    groundTime: String;
    constructor(id: Number, value: Number, groundTime: String) {
        this.id = id;
        this.value = value;
        this.groundTime = groundTime;
    }

    static Types = [
        new PacketType('temp_0', 205, 'C', -20, 50),
        new PacketType('batt_volt', 206, 'V', 7, 9),
    ]

    public static get TypesNames() : String[] {
        let arr: String[] = [];
        Packet.Types.forEach(type => {
            arr.push(type.name);
        });
        return arr;
    }
    
    public getPacketType() : PacketType {
        return Packet.Types.filter(type => type.id == this.id)[0];
    }

    public isPacketInRange() : Boolean {
        let type = this.getPacketType();
        if (this.value > type.rangeMax || this.value < type.rangeMin) {
            return false;
        }
        return true;
    }
    
}

export { Packet, PacketType };