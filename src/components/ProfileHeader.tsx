import { Mail, Phone } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  phone: string;
  email: string;
  profileImage: string;
  bio: string;
}

const ProfileHeader = ({ name, phone, email, profileImage, bio }: ProfileHeaderProps) => {
  return (
    <section id="home" className="py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-foreground mb-4">{name}</h1>
          
          <div className="space-y-1 mb-4 text-sm">
            <p className="flex items-center gap-2">
              <span className="text-muted-foreground">Cell:</span>
              <span className="text-link">{phone}</span>
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
              <SocialLink href="https://scholar.google.com" icon="scholar" />
              <SocialLink href="https://linkedin.com" icon="linkedin" />
              <SocialLink href="https://github.com" icon="github" />
              <SocialLink href="https://researchgate.net" icon="researchgate" />
              <SocialLink href="https://twitter.com" icon="twitter" />
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
            className="w-40 h-48 object-cover rounded-sm border border-border"
          />
        </div>
      </div>
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  icon: string;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
  const iconColors: Record<string, string> = {
    scholar: "bg-blue-600",
    linkedin: "bg-[#0077b5]",
    github: "bg-gray-800",
    researchgate: "bg-[#00d0af]",
    twitter: "bg-[#1da1f2]",
  };

  const iconLabels: Record<string, string> = {
    scholar: "GS",
    linkedin: "in",
    github: "GH",
    researchgate: "RG",
    twitter: "X",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-icon ${iconColors[icon]} flex items-center justify-center text-white text-xs font-bold`}
      aria-label={icon}
    >
      {iconLabels[icon]}
    </a>
  );
};

export default ProfileHeader;
