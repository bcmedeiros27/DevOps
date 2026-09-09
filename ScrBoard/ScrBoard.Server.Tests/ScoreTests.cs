using ScrBoard.Server.Models;

namespace ScrBoard.Server.Tests
{
    public class ScoreTests
    {
        [Fact]
        public void Score_ShouldStorePlayerName()
        {
            
            var score = new Score();

            
            score.PlayerName = "Brandon";

            
            Assert.Equal("Brandon", score.PlayerName);
        }

        [Fact]
        public void Score_ShouldStoreReactionTime()
        {
            
            var score = new Score();

            
            score.ReactionTimeMs = 245;

            
            Assert.Equal(245, score.ReactionTimeMs);
        }
    }
}