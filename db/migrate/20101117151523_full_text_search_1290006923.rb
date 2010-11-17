class FullTextSearch1290006923 < ActiveRecord::Migration
  def self.up
    execute(<<-'eosql'.strip)
      DROP index IF EXISTS contacts_fts_idx
    eosql
    execute(<<-'eosql'.strip)
      CREATE index contacts_fts_idx
      ON contacts
      USING gin((to_tsvector('english', coalesce("contacts"."first_name", '') || ' ' || coalesce("contacts"."last_name", ''))))
    eosql
  end

  def self.down
    execute(<<-'eosql'.strip)
      DROP index IF EXISTS contacts_fts_idx
    eosql
  end
end
