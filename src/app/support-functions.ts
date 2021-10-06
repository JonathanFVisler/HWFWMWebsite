import { Essence } from './essence'

export class supportFunctions {
    static rarityNumberToString(number: Number): string {
        switch (number) {
            case 1:
                return "COMMON";
                break;
            case 2:
                return "UNCOMMON";
                break;
            case 3:
                return "RARE";
                break;
            case 4:
                return "EPIC";
                break;
            case 5:
                return "LEGENDARY";
                break;
            default:
                return "UNKNOWN";
                break;
        }
    }

    static boolToYesNo(input: boolean): string {
        if (input) {
            return "Yes";
        }
        return "No";
    }

    static getEssencesOfRarity(rarity: Number, essences: Essence[]): Essence[] {
        return essences.filter(essence => essence.rarity == rarity);
    }

    static getConFluenceEssences(essences: Essence[]): Essence[] {
        return this.getEssencesOfRarity(0, essences);
    }
    
    static getEssencesInLextograficOrder(essences: Essence[]): Essence[] {
        return essences.sort((a, b) => a.name.localeCompare(b.name));
    }

    static getEssencesInIdOrder(essences: Essence[]): Essence[] {
        return essences.sort((a, b) => a.id - b.id);
    }
}