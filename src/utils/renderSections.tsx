import HeroOne from "@/components/ui/Heroes/HeroOne";

type Section = {
  _type: string;
  _key: string;
};

export const RenderSections = (section: Section) => {
  switch (section._type) {
    case "hero":
      return <HeroOne {...section} key={section._key} />;
  }
};
