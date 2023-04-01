﻿using BirdAPI.Domain.Enums;

namespace BirdAPI.Application.Features.Bird.Commands.InputModels
{
    public class UpdateBirdInputModel
    {
        public int Id { get; set; }
        public string RingNumber { get; set; }
        public int CageNumber { get; set; }
        public int OwnerId { get; set; }
        public string Description { get; set; }
        //public bool IsChild { get; set; }
        public bool Dead { get; set; }
    }
}