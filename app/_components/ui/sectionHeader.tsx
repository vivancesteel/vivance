type SectionHeaderProps = {
  title: string;
  description: string;
  isColorInverse?: boolean;
};

export function SectionHeader({
  title,
  description,
  isColorInverse,
}: SectionHeaderProps) {
  return (
    <div className="text-center flex flex-col items-center">
      <h2
        className={`text-3xl lg:text-4xl mb-6 ${
          isColorInverse ? "text-text-inverse" : "text-text-default"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-md sm:text-base max-w-140 ${
          isColorInverse ? "text-text-grey-light" : "text-text-secundary"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
