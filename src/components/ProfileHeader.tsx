import SocialIcons from "./SocialIcons";

interface ProfileHeaderProps {
  name: string;
  phone: string;
  email: string;
  profileImage: string;
  bio: string;
}

const ProfileHeader = ({ name, phone, email, profileImage, bio }: ProfileHeaderProps) => {
  const socialLinks = [
    { href: "https://scholar.google.com/citations?user=WRKxdKYAAAAJ&hl=en", icon: "scholar" as const, label: "Google Scholar" },
    { href: "https://www.linkedin.com/in/noor-fatima-afzal", icon: "linkedin" as const, label: "LinkedIn" },
    { href: "https://github.com/Noor-Fatima-Afzal", icon: "github" as const, label: "GitHub" },
    { href: "https://x.com/NoorFatimaAfzal?t=TqARvJq1l1U_M9A6ZBRD0g&s=09", icon: "twitter" as const, label: "X (Twitter)" },
    { href: "https://www.facebook.com/share/1Az6G75xXL/", icon: "facebook" as const, label: "Facebook" },
  ];

  return (
    <section id="home" className="py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-foreground mb-4">{name}</h1>
          
          <div className="space-y-1 mb-4 text-sm">
            <p className="flex items-center gap-2">
              <span className="text-muted-foreground">Cell:</span>
              <span className="text-[hsl(var(--link))]">{phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-muted-foreground">Email:</span>
              <a href={`mailto:${email}`} className="academic-link">
                {email}
              </a>
            </p>
          </div>

          <div className="mb-6">
            <span className="text-muted-foreground text-sm">Follow Me: </span>
            <div className="inline-flex items-center gap-2 mt-2">
              <SocialIcons links={socialLinks} />
            </div>
          </div>

          <p className="font-serif-italic text-muted-foreground leading-relaxed text-base">
            {bio}
          </p>
        </div>

        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt={`${name} profile`}
            className="w-40 h-40 object-cover rounded-full border border-border"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;

