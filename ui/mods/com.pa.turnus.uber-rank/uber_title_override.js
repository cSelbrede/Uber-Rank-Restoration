(function() {
    var oldTitle = MatchmakingUtility.getTitle;
    MatchmakingUtility.getTitle = function(league)
    {
        if (league === 1) return loc("!LOC:Uber");
        return oldTitle(league);
    }
})();
