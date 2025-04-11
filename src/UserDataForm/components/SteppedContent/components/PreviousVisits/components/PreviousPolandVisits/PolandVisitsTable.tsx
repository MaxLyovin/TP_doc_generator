import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { Visit } from "./PreviousPolandVisits";


type PolandVisitsTableProps = {
  visits: Visit[];
  removeVisit: (visitIndex: number) => void;
};

export const PolandVisitsTable = ({
  visits,
  removeVisit,
}: PolandVisitsTableProps) => {
  const { t } = useTranslation();
  return (
    <Table className="text-start">
      <TableHeader>
        <TableRow>
          <TableHead>{t("common.from")}</TableHead>
          <TableHead>{t("common.to")}</TableHead>
          <TableHead>{t("common.legalBase")}</TableHead>
          <TableHead>{t("common.action")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {visits.map((option, index) => (
          <TableRow key={index}>
            <TableCell>{option.from}</TableCell>
            <TableCell>{option.to}</TableCell>
            <TableCell>{option.legalBase}</TableCell>
            <TableCell>
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  removeVisit(index);
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
