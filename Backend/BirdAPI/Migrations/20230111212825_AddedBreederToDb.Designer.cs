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
    [Migration("20230111212825_AddedBreederToDb")]
    partial class AddedBreederToDb
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

                    b.Property<int>("CageNumber")
                        .HasColumnType("int");

                    b.Property<string>("Color")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("IsChild")
                        .HasColumnType("bit");

                    b.Property<bool?>("IsDead")
                        .HasColumnType("bit");

                    b.Property<bool?>("IsFather")
                        .HasColumnType("bit");

                    b.Property<bool?>("IsMother")
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

                    b.Property<long>("BirdId")
                        .HasColumnType("bigint");

                    b.Property<int>("BirdId1")
                        .HasColumnType("int");

                    b.Property<long>("BreederId")
                        .HasColumnType("bigint");

                    b.Property<int>("BreederId1")
                        .HasColumnType("int");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("BirdId1");

                    b.HasIndex("BreederId1");

                    b.ToTable("BreederBird");
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

                    b.Property<long>("BirdId")
                        .HasColumnType("bigint");

                    b.Property<int>("BirdId1")
                        .HasColumnType("int");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("datetime2");

                    b.Property<long>("OwnerId")
                        .HasColumnType("bigint");

                    b.Property<int>("OwnerId1")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BirdId1");

                    b.HasIndex("OwnerId1");

                    b.ToTable("OwnerBird");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.BirdAggregate.Bird", b =>
                {
                    b.HasOne("BirdAPI.Domain.AggregatesModel.BreederAggregate.Breeder", "Breeder")
                        .WithMany("Birds")
                        .HasForeignKey("BreederId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("BirdAPI.Domain.AggregatesModel.OwnerAggregate.Owner", "Owner")
                        .WithMany("Birds")
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
                        .HasForeignKey("BirdId1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BirdAPI.Domain.AggregatesModel.BreederAggregate.Breeder", "Breeder")
                        .WithMany()
                        .HasForeignKey("BreederId1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Bird");

                    b.Navigation("Breeder");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.OwnerAggregate.OwnerBird", b =>
                {
                    b.HasOne("BirdAPI.Domain.AggregatesModel.BirdAggregate.Bird", "Bird")
                        .WithMany()
                        .HasForeignKey("BirdId1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BirdAPI.Domain.AggregatesModel.OwnerAggregate.Owner", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Bird");

                    b.Navigation("Owner");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.BreederAggregate.Breeder", b =>
                {
                    b.Navigation("Birds");
                });

            modelBuilder.Entity("BirdAPI.Domain.AggregatesModel.OwnerAggregate.Owner", b =>
                {
                    b.Navigation("Birds");
                });
#pragma warning restore 612, 618
        }
    }
}
