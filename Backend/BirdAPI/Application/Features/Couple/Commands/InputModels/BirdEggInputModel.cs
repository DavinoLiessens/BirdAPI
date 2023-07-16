﻿namespace BirdAPI.Application.Features.Couple.Commands.InputModels
{
    public class BirdEggInputModel
    {
        public int? Id { get; set; }
        public DateTime LayedOn { get; set; }
        public DateTime? CameOutOn { get; set; }
        public string? RingNumber { get; set; }
        public DateTime? FlyOutOn { get; set; }
        public int CoupleId { get; set; }
    }
}
