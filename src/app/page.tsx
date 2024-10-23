import Image from "next/image";
import {
  HeartIcon,
  PlayIcon,
  PlaySquareIcon,
  PlusSquareIcon,
} from "lucide-react";

import { artists, genres, topCharts } from "@/constants";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative">
      <Image
        src="/song_banner.png"
        alt="Banner"
        width={1920}
        height={1080}
        className="h-80 md:h-[600px] object-cover"
      />

      <div className="absolute top-32 md:top-60 flex flex-col pl-12 md:pl-24 ">
        <h1 className="font-bold text-4xl md:text-8xl">Flower</h1>

        <div className="flex items-center gap-x-2 md:gap-x-4 text-xs md:text-xl">
          <h2 className="font-bold">JISOO</h2>
          <p>492M Plays</p>
        </div>

        <div className="mt-3 md:mt-6 flex items-center gap-x-4">
          <Button
            className="hidden md:flex rounded-full font-bold bg-blue-500 hover:bg-blue-500/90 text-white"
            size="lg"
          >
            Listen Now
          </Button>

          <Button
            className="flex md:hidden rounded-full bg-blue-500 hover:bg-blue-500/90 text-white size-8"
            size="icon"
          >
            <PlayIcon />
          </Button>

          <Button
            className="rounded-full bg-transparent hover:bg-transparent border-2 border-white text-white size-8"
            size="icon"
          >
            <HeartIcon />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 m-3 md:m-6 gap-3 md:gap-5">
        {/* Top Artists */}
        <div className="bg-[#202026] p-4 md:p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-base md:text-lg font-bold">Top Artists</h3>
            <p className="text-sm md:text-base text-muted-foreground font-bold cursor-pointer hover:underline">
              See all
            </p>
          </div>

          <div className="w-full overflow-x-auto scrollbar-hide my-4 md:my-8">
            <div className="flex gap-3 md:gap-5">
              {artists.map((artist) => (
                <div
                  key={artist.id}
                  className="flex flex-col items-center text-center gap-4 cursor-pointer hover:scale-105 transition-transform min-w-[150px] md:min-w-[200px] p-2"
                >
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={640}
                    height={640}
                    className="rounded-xl"
                  />
                  <div>
                    <h4 className="font-bold text-xs">{artist.name}</h4>
                    <p className="text-muted-foreground font-bold text-xs">
                      {artist.plays}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 row-span-2 gap-5">
          {/* Genres */}
          <div className="bg-[#202026] p-4 md:p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-lg font-bold">Genres</h3>
              <p className="text-sm md:text-base text-muted-foreground font-bold cursor-pointer hover:underline">
                See all
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-5 my-4 md:my-8">
              {genres.map((genre) => (
                <div
                  key={genre.id}
                  className="flex items-center justify-center text-white p-8  rounded-xl text-center hover:scale-105 transition-transform cursor-pointer"
                  style={{ backgroundColor: genre.color }}
                >
                  <span className="font-bold">{genre.genre}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Charts */}
          <div className="md:col-span-2 bg-[#202026] p-4 md:p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-lg font-bold">Top Charts</h3>
              <p className="text-sm md:text-base text-muted-foreground font-bold cursor-pointer hover:underline">
                See all
              </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-5 my-4 md:my-8">
              {topCharts.map((song) => (
                <div
                  key={song.id}
                  className="flex items-center justify-between gap-5 hover:bg-gray-400/10 p-2 cursor-pointer rounded-xl transition-colors"
                >
                  <span className="text-sm md:text-base text-muted-foreground font-bold">
                    0{song.id}
                  </span>

                  <div className="flex items-center w-2/3 gap-4">
                    <Image
                      src={song.image}
                      alt={song.title}
                      width={640}
                      height={640}
                      className="rounded-xl object-cover h-12 w-12 md:h-16 md:w-16"
                    />
                    <div>
                      <h4 className="font-bold text-sm md:text-lg">
                        {song.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground font-bold">
                        {song.artist}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base font-bold">
                    {song.duration}
                  </p>

                  <PlaySquareIcon className="size-6 text-blue-500 hover:text-white transition-colors" />

                  <PlusSquareIcon className="size-6 hover:text-blue-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
