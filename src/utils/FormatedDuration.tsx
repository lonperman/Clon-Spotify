export const formatDuration = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    if(hours > 0) {
        return `${hours} h`
    } else {
        return `${minutes} min`
    }
}

export const durationInSeconds = (duration: string): number => {
    const parts = duration.split(":").map(Number);
    if(parts.length === 2) {
        return parts[0] * 60 + parts[1]
    } else if(parts.length === 3) {
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else {
        return 0
    }
} 
