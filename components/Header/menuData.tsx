import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Početna",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Fakultet",
    newTab: false,
    path: "/fakultet",
    submenu: [
      {
        id: 31,
        title: "O fakultetu",
        newTab: false,
        path: "/fakultet",
      },
      {
        id: 34,
        title: "Misija i vizija",
        newTab: false,
        path: "/misija",
      },
      {
        id: 35,
        title: "Historija fakulteta",
        newTab: false,
        path: "/historija",
      },
      {
        id: 35,
        title: "Podaci i statistike",
        newTab: false,
        path: "/data",
      },
      {
        id: 35.1,
        title: "Laboratorija",
        newTab: false,
        path: "/laboratorija",
      },
      {
        id: 36,
        title: "Javne nabavke",
        newTab: false,
        path: "/nabavke",
      },
    ],
  },
  {
    id: 3,
    title: "Nastava",
    newTab: false,
    path: "/nastava",
    submenu: [
      {
        id: 35,
        title: "Nastavno osoblje",
        newTab: false,
        path: "/nastavno-osoblje",
      },
      {
        id: 35.1,
        title: "Odsjeci",
        newTab: false,
        path: "/odsjeci",
      },
      {
        id: 36,
        title: "Prvi ciklus studija",
        newTab: false,
        path: "/prvi-ciklus",
      },
      {
        id: 36,
        title: "Drugi ciklus studija",
        newTab: false,
        path: "/drugi-ciklus",
      },
      {
        id: 36,
        title: "Treci ciklus studija",
        newTab: false,
        path: "/treci-ciklus",
      },
      {
        id: 36,
        title: "Online",
        newTab: false,
        path: "/online",
      },
      {
        id: 36,
        title: "Dokumenti",
        newTab: false,
        path: "/documents",
      },
    ],
  },
  {
    id: 4,
    title: "Novosti",
    newTab: false,
    path: "/novosti",
  },
  {
    id: 5,
    title: "Studenti",
    newTab: false,
    path: "/studenti",
    submenu: [
      {
        id: 31,
        title: "Lista novosti",
        newTab: false,
        path: "/studenti",
      },
      {
        id: 34,
        title: "Studentska služba",
        newTab: false,
        path: "/studentska",
      },
      {
        id: 35,
        title: "Unija studenata",
        newTab: false,
        path: "/unija-studenata",
      },
      {
        id: 36,
        title: "Raspored polaganja ispita",
        newTab: false,
        path: "/raspored",
      },
      {
        id: 36,
        title: "Rezultati ispita",
        newTab: false,
        path: "/rezultati",
      },
      {
        id: 35,
        title: "Mašinijada",
        newTab: false,
        path: "/masinijada",
      },
      {
        id: 35.1,
        title: "Student blog",
        newTab: false,
        path: "/blog",
      },
    ],
  },
  {
    id: 6,
    title: "Galerija",
    newTab: false,
    path: "/galerija",
  },
  {
    id: 7,
    title: "Kontakt",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
