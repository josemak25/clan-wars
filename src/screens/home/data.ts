import dayjs from "dayjs";
import { generateId } from "../../helpers";
import { ITournament } from "../../providers/store/reducers/tournament/interfaces";

const dummy_tournament: ITournament = {
  team_size: 4,
  room_size: 40,
  id: generateId(),
  price_pool: 500000,
  created_at: Date.now(),
  updated_at: Date.now(),
  cover_image: "anonymous",
  // tournament_icon="anonymous"
  winner_clan_id: generateId(),
  registration_fee: "25000.00",
  title: "CODM: Private Alcatraz Tournament",
  tags: ["COD Warzone", "PC", "Invitational"],
  start_date: dayjs().add(1, "days").toString(),
  participates: [...Array(40)].map(() => ({
    id: generateId(),
    team_name: "Pokemon",
    clan_leader_id: generateId(),
    clan_name: "Anonymous eSports",
    created_at: dayjs().toString(),
    updated_at: dayjs().toString(),
    contact_email_address: "test@gamil.com",
    clan_logo: `https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg`,
    team: [...Array(4)].map(() => ({
      id: generateId(),
      avatar: "fdsgfhdg",
      player_ign: "Drifter",
      player_id: generateId(),
      created_at: dayjs().toString(),
      updated_at: dayjs().toString(),
      total_kills: Math.floor(Math.random() * 500),
    })),
  })),
  host_clan: {
    id: generateId(),
    team_name: "Pokemon",
    clan_logo: "anonymous",
    clan_leader_id: generateId(),
    clan_name: "Anonymous eSports",
    created_at: dayjs().toString(),
    updated_at: dayjs().toString(),
    contact_email_address: "test@gamil.com",
    team: [
      {
        id: generateId(),
        avatar: "fdsgfhdg",
        total_kills: 32435,
        player_ign: "Drifter",
        player_id: generateId(),
        created_at: dayjs().toString(),
        updated_at: dayjs().toString(),
      },
    ],
  },
};

export const dummy_data = [...Array(3)]
  .map(generateId)
  .map(() => dummy_tournament);
