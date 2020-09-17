CREATE TABLE users(
    id UUID NOT NULL PRIMARY KEY,
    accountType VARCHAR(200) NOT NULL,
    username VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    isAccountNonExpired BOOLEAN NOT NULL,
    isAccountNonLocked BOOLEAN NOT NULL,
    isCredentialsNonExpired BOOLEAN NOT NULL,
    isEnabled BOOLEAN NOT NULL
)