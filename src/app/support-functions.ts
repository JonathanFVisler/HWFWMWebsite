

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
}