﻿// <auto-generated />
using System;
using BirdAPI.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BirdAPI.Migrations
{
    [DbContext(typeof(BirdAPIContext))]
    [Migration("20231115175031_AddedBirdIdToBirdEgg")]
    partial class AddedBirdIdToBirdEgg
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.BirdAggregate.Bird", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("BirdType")
                        .HasColumnType("int");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("BreederId")
                        .HasColumnType("int");

                    b.Property<string>("CageNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Color")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("IsDead")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("datetime2");

                    b.Property<int>("OwnerId")
                        .HasColumnType("int");

                    b.Property<string>("RingNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("BreederId");

                    b.HasIndex("OwnerId");

                    b.ToTable("Birds");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.BreederAggregate.Breeder", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("datetime2");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Breeders");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.BreederAggregate.BreederBird", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"), 1L, 1);

                    b.Property<int>("BirdId")
                        .HasColumnType("int");

                    b.Property<int>("BreederId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("BirdId");

                    b.HasIndex("BreederId");

                    b.ToTable("BreederBird");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.CoupleAggregate.BirdEgg", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int?>("BirdId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("CameOutOn")
                        .HasColumnType("datetime2");

                    b.Property<string>("Color")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CoupleId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("FlyOutOn")
                        .HasColumnType("datetime2");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("LayedOn")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("datetime2");

                    b.Property<string>("RingNumber")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CoupleId");

                    b.ToTable("BirdEggs");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.CoupleAggregate.Couple", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("CageNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("FatherId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("datetime2");

                    b.Property<int>("MotherId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("StartedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("FatherId");

                    b.HasIndex("MotherId");

                    b.ToTable("Couples");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.CoupleAggregate.CoupleBird", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"), 1L, 1);

                    b.Property<int>("BirdId")
                        .HasColumnType("int");

                    b.Property<int>("CoupleId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("BirdId");

                    b.HasIndex("CoupleId");

                    b.ToTable("BirdCouples");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.OwnerAggregate.Owner", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("datetime2");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Owners");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.OwnerAggregate.OwnerBird", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"), 1L, 1);

                    b.Property<int>("BirdId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("datetime2");

                    b.Property<int>("OwnerId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BirdId");

                    b.HasIndex("OwnerId");

                    b.ToTable("OwnerBird");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.BirdAggregate.Bird", b =>
                {
                    b.HasOne("BirdAPI.Domain.AggregatesModel.BreederAggregate.Breeder", "Breeder")
                        .WithMany()
                        .HasForeignKey("BreederId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("BirdAPI.Domain.AggregatesModel.OwnerAggregate.Owner", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Breeder");

                    b.Navigation("Owner");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.BreederAggregate.BreederBird", b =>
                {
                    b.HasOne("BirdAPI.Domain.AggregatesModel.BirdAggregate.Bird", "Bird")
                        .WithMany()
                        .HasForeignKey("BirdId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BirdAPI.Domain.AggregatesModel.BreederAggregate.Breeder", "Breeder")
                        .WithMany()
                        .HasForeignKey("BreederId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Bird");

                    b.Navigation("Breeder");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.CoupleAggregate.BirdEgg", b =>
                {
                    b.HasOne("BirdAPI.Domain.AggregatesModel.CoupleAggregate.Couple", null)
                        .WithMany("BirdEggs")
                        .HasForeignKey("CoupleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.CoupleAggregate.Couple", b =>
                {
                    b.HasOne("BirdAPI.Domain.AggregatesModel.BirdAggregate.Bird", "Father")
                        .WithMany()
                        .HasForeignKey("FatherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BirdAPI.Domain.AggregatesModel.BirdAggregate.Bird", "Mother")
                        .WithMany()
                        .HasForeignKey("MotherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Father");

                    b.Navigation("Mother");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.CoupleAggregate.CoupleBird", b =>
                {
                    b.HasOne("BirdAPI.Domain.AggregatesModel.BirdAggregate.Bird", "Bird")
                        .WithMany("BirdCouples")
                        .HasForeignKey("BirdId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BirdAPI.Domain.AggregatesModel.CoupleAggregate.Couple", "Couple")
                        .WithMany("BirdCouples")
                        .HasForeignKey("CoupleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Bird");

                    b.Navigation("Couple");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.OwnerAggregate.OwnerBird", b =>
                {
                    b.HasOne("BirdAPI.Domain.AggregatesModel.BirdAggregate.Bird", "Bird")
                        .WithMany()
                        .HasForeignKey("BirdId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BirdAPI.Domain.AggregatesModel.OwnerAggregate.Owner", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Bird");

                    b.Navigation("Owner");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.BirdAggregate.Bird", b =>
                {
                    b.Navigation("BirdCouples");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.CoupleAggregate.Couple", b =>
                {
                    b.Navigation("BirdCouples");

                    b.Navigation("BirdEggs");
                });
#pragma warning restore 612, 618
        }
    }
}
