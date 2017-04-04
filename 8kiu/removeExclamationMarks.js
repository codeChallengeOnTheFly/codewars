function removeExclamationMarks(s) {
    while (s.search("!") > 0) {
        s = s.replace("!", "");
    }
    return s;
}
