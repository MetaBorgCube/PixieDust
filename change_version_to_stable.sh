grep -rEl --exclude=*/target/* --exclude=*/src-gen/* --include=*.{yaml,xml,MF} "0.5.1.qualifier" * | xargs sed -i "" "s/0.5.1.qualifier/0.6.0/g"
grep -rEl --exclude=*/target/* --exclude=*/src-gen/* --include=*.{yaml,xml,MF} "0.5.1-SNAPSHOT" * | xargs sed -i "" "s/0.5.1-SNAPSHOT/0.6.0/g"
