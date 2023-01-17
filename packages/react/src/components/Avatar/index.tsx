import {
  AvatarContainer,
  AvatarDesc,
  AvatarFallback,
  AvatarImage,
} from "./styles";
import { User } from "phosphor-react";
import { ComponentProps, useMemo } from "react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps | any) {
  const initials = useMemo(() => {
    const names = props.children.trim().split(" ");
    const firstName = names.shift();
    const lastName = names.pop();
    const initialFirstName = firstName ? firstName[0] : "";
    const initialLastName = lastName ? lastName[0] : "";

    return `${initialFirstName}${initialLastName}`.toUpperCase();
  }, [props.children]);
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarDesc>{initials}</AvatarDesc>
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avatar.displayName = "Avatar";
