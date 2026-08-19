namespace ScrBoard.Server.Models
{
    public class Score
    {
        public int Id { get; set; }

        public string PlayerName { get; set; } = "";

        public int ReactionTimeMs { get; set; }

        public DateTime CreatedAt
        {
            get; set;
        }
    }
}
