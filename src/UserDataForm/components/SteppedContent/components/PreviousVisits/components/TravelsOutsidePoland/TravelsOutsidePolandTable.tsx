import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Travel } from "./TravelsOutsidePoland";
import { Button } from "@/components/ui/button";

type TravelsOutsidePolandTableProps = {
  travels: Travel[];
  removeTravel: (travelIndex: number) => void;
};

export const TravelsOutsidePolandTable = ({
  travels,
  removeTravel,
}: TravelsOutsidePolandTableProps) => {
  const { t } = useTranslation();
  return (
    <Table className="text-start">
      <TableHeader>
        <TableRow>
          <TableHead>{t("common.from")}</TableHead>
          <TableHead>{t("common.to")}</TableHead>
          <TableHead>
            {t("travels_outside_poland.field.country.label")}
          </TableHead>
          <TableHead>{t("common.action")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {travels.map((option, index) => (
          <TableRow key={index}>
            <TableCell>{option.from}</TableCell>
            <TableCell>{option.to}</TableCell>
            <TableCell>{option.country}</TableCell>
            <TableCell>
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  removeTravel(index);
                }}
              >
                <X />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
